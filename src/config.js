const config = {
  MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "eu-central-1",
      BUCKET: "notes-app-upload-inline6",
    },
    apiGateway: {
      REGION: "eu-central-1",
      URL: "https://fqi5k6v5s7.execute-api.eu-central-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "eu-central-1",
      USER_POOL_ID: "eu-central-1_kJCGw02f8",
      APP_CLIENT_ID: "h12fia5tg8deb75847uvbked8",
      IDENTITY_POOL_ID: "eu-central-1:e49acbbf-f376-49bf-8028-40f856242e39",
    },
  };
  
  export default config;