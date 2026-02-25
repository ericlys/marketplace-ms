export enum CircuitBreakerStateEnum {
  CLOSE = 'CLOSED',
  OPEN = 'OPEN',
  HALF_OPEN = 'HALF_OPEN',
}

export interface CircuitBreakerOptions {
  failureThreshold: number; // Number of failures before opening the circuit
  timeout: number; // Time to wait before allowing a retry (in milliseconds)
  resetTimeout: number; // Time to wait before resetting the circuit to closed (in milliseconds)
}

export interface CircuitBreakerState {
  state: CircuitBreakerStateEnum;
  failureCount: number; // Number of consecutive failures
  lastFailureTime: number; // Time of the last failure (in milliseconds)
  nextAttemptTime: number; // Time when the next attempt can be made (in milliseconds)
}

export interface CircuitBreakerResult<T> {
  success: boolean;
  data?: T;
  error?: Error;
  fromCache?: boolean; // Indicates if the result is from cache (for half-open state)
}
