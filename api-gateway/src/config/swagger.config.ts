// src/config/swagger.config.ts

export const swaggerCustomCss = `
  /* Fundo Principal e Cores de Texto */
  .swagger-ui {
    background-color: #0b0e14;
    color: #e0e0e0;
  }

  .swagger-ui .info .title, 
  .swagger-ui .info li, 
  .swagger-ui .info p, 
  .swagger-ui .info table,
  .swagger-ui .model-title,
  .swagger-ui .parameter__name,
  .swagger-ui .parameter__type,
  .swagger-ui .opblock-description-wrapper p {
    color: #e0e0e0 !important;
  }

  .swagger-ui .topbar { display: none }

  .swagger-ui .opblock-tag {
    color: #ffffff;
    border-bottom: 1px solid #333;
  }

  .swagger-ui .opblock {
    background-color: #161b22;
    border: 1px solid #30363d;
    border-radius: 8px;
  }

  /* Cores dos Métodos */
  .swagger-ui .opblock.opblock-get { background: rgba(97, 175, 254, 0.1); border-color: #61affe; }
  .swagger-ui .opblock.opblock-post { background: rgba(73, 204, 144, 0.1); border-color: #49cc90; }
  .swagger-ui .opblock.opblock-put { background: rgba(252, 161, 48, 0.1); border-color: #fca130; }
  .swagger-ui .opblock.opblock-delete { background: rgba(249, 62, 62, 0.1); border-color: #f93e3e; }

  .swagger-ui section.models { border: 1px solid #30363d; border-radius: 8px; }
  
  .swagger-ui select, 
  .swagger-ui input[type=text], 
  .swagger-ui textarea {
    background: #0d1117 !important;
    color: #fff !important;
    border: 1px solid #30363d !important;
  }

  .swagger-ui .btn.execute {
    background-color: #3b82f6;
    color: #fff;
  }

  .swagger-ui .model-box,
  .swagger-ui pre {
    background-color: #0d1117 !important;
    color: #79c0ff !important;
  }
`;

export const swaggerOptions = {
  customSiteTitle: 'Marketplace API Gateway Documentation',
  customfavIcon: 'https://nestjs.com/img/logo-small.svg',
  swaggerOptions: {
    persistAuthorization: true,
    docExpansion: 'list',
    filter: true,
  },
};
