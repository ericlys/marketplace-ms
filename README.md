# Marketplace Microservices

Este projeto é uma plataforma de marketplace baseada em uma arquitetura de microsserviços.

## Status do Projeto

O projeto está em fase inicial de desenvolvimento.

### Microsserviços Ativos:

- **API Gateway**: O ponto de entrada principal para todas as requisições, responsável pelo roteamento, autenticação e segurança.

## Arquitetura

A arquitetura segue o padrão de microsserviços para garantir escalabilidade, resiliência e facilidade de manutenção.

### Tecnologias Utilizadas

- **Node.js** com **NestJS**
- **TypeScript**
- **Passport.js & JWT** (Autenticação)
- **Swagger** (Documentação da API)
- **Axios** (Proxy/Comunicação entre serviços)

## Como Começar

### Pré-requisitos

- Node.js (v18+)
- pnpm (recomendado) ou npm/yarn

### Executando o API Gateway

1. Navegue até o diretório do gateway:

   ```bash
   cd api-gateway
   ```

2. Instale as dependências:

   ```bash
   pnpm install
   ```

3. Inicie o servidor em modo de desenvolvimento:
   ```bash
   pnpm run start:dev
   ```

O gateway estará disponível em [http://localhost:3000](http://localhost:3000).

## Estrutura do Repositório

- `api-gateway/`: Serviço de gateway e autenticação.
