import { Injectable } from '@nestjs/common';
import { ThrottlerGuard, ThrottlerException } from '@nestjs/throttler';
import { ThrottlerRequest } from '@nestjs/throttler';
import { Request, Response } from 'express';

@Injectable()
export class CustomThrottlerGuard extends ThrottlerGuard {
  protected getTracker(req: Request): Promise<string> {
    return Promise.resolve(`${req.ip}-${req.headers['user-agent']}`);
  }

  protected async handleRequest(
    requestProps: ThrottlerRequest,
  ): Promise<boolean> {
    const { context, limit, ttl, throttler } = requestProps;

    const { req, res } = this.getRequestResponse(context) as {
      req: Request;
      res: Response;
    };

    const throttleName = throttler?.name ?? 'default';
    const tracker = await this.getTracker(req);
    const key = this.generateKey(context, tracker, throttleName);

    const totalHits = await this.storageService.increment(
      key,
      ttl,
      limit,
      1,
      throttleName,
    );

    const hitsNumber =
      typeof totalHits === 'number' ? totalHits : Number(totalHits);

    if (hitsNumber > limit) {
      res.setHeader('Retry-After', Math.ceil(ttl / 1000));
      throw new ThrottlerException();
    }

    res.setHeader(`${this.headerPrefix}-Limit`, limit);
    res.setHeader(
      `${this.headerPrefix}-Remaining`,
      Math.max(0, limit - hitsNumber),
    );
    res.setHeader(`${this.headerPrefix}-Reset`, Math.ceil(ttl / 1000));

    return true;
  }
}
