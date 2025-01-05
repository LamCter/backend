/** @format */

// run: pm2 start ecosystem.config.js --env production|development --watch
module.exports = {
  apps: [
    {
      name: 'blog-service',
      instances: 1,
      script: './blog-service/src/app.js',
      env: {
        NODE_ENV: 'development',
        JWT_SECRET: '123',
        JWT_EXPIRES_IN: '30d',
        MONGODB_URI: 'mongodb+srv://nqdcntt2002:doanh2002716@cluster0.jbpwspc.mongodb.net',
        API_ROOT: '/api',
        API_ENDPOINT: 'https://localhost:3000/',
        PORT: 8005,
        IP: 'localhost',
        CLOUDINARY_CLOUD_NAME: 'dq3tanxae',
        CLOUDINARY_API_KEY: '947288579199897',
        CLOUDINARY_API_SECRET: 'IRTjx6shb5rHWza5u4-XqkKFKRs',
      },
      watch_options: {
        followSymlinks: false,
      },
      ignore_watch: ['node_modules', 'src/public'],
      watch: ['src/services', 'src/app'],
    },
    {
      name: 'user-service',
      instances: 1,
      script: './user-service/src/app.js',
      env: {
        NODE_ENV: 'development',
        JWT_SECRET: '123',
        JWT_EXPIRES_IN: '30d',
        MONGODB_URI: 'mongodb+srv://nqdcntt2002:doanh2002716@cluster0.jbpwspc.mongodb.net',
        API_ROOT: '/api',
        API_ENDPOINT: 'https://localhost:3000/',
        PORT: 8001,
        IP: 'localhost',
        CLOUDINARY_CLOUD_NAME: 'dq3tanxae',
        CLOUDINARY_API_KEY: '947288579199897',
        CLOUDINARY_API_SECRET: 'IRTjx6shb5rHWza5u4-XqkKFKRs',
      },
      watch_options: {
        followSymlinks: false,
      },
      ignore_watch: ['node_modules', 'src/public'],
      watch: ['src/services', 'src/app'],
    },
    {
      name: 'cart-service',
      instances: 1,
      script: './cart-service/src/app.js',
      env: {
        NODE_ENV: 'development',
        JWT_SECRET: '123',
        JWT_EXPIRES_IN: '30d',
        MONGODB_URI: 'mongodb+srv://nqdcntt2002:doanh2002716@cluster0.jbpwspc.mongodb.net',
        API_ROOT: '/api',
        API_ENDPOINT: 'https://localhost:3000/',
        PORT: 8006,
        IP: 'localhost',
        CLOUDINARY_CLOUD_NAME: 'dq3tanxae',
        CLOUDINARY_API_KEY: '947288579199897',
        CLOUDINARY_API_SECRET: 'IRTjx6shb5rHWza5u4-XqkKFKRs',
      },
      watch_options: {
        followSymlinks: false,
      },
      ignore_watch: ['node_modules', 'src/public'],
      watch: ['src/services', 'src/app'],
    },
    {
      name: 'gateway-api',
      instances: 1,
      script: './gateway-api/src/app.js',
      env: {
        NODE_ENV: 'development',
        JWT_SECRET: '123',
        JWT_EXPIRES_IN: '30d',
        MONGODB_URI: 'mongodb+srv://nqdcntt2002:doanh2002716@cluster0.jbpwspc.mongodb.net',
        API_ROOT: '/api',
        API_ENDPOINT: 'https://localhost:3000/',
        PORT: 8000,
        IP: 'localhost',
        CLOUDINARY_CLOUD_NAME: 'dq3tanxae',
        CLOUDINARY_API_KEY: '947288579199897',
        CLOUDINARY_API_SECRET: 'IRTjx6shb5rHWza5u4-XqkKFKRs',
      },
      watch_options: {
        followSymlinks: false,
      },
      ignore_watch: ['node_modules', 'src/public'],
      watch: ['src/services', 'src/app'],
    },
    {
      name: 'order-service',
      instances: 1,
      script: './order-service/src/app.js',
      env: {
        NODE_ENV: 'development',
        JWT_SECRET: '123',
        JWT_EXPIRES_IN: '30d',
        MONGODB_URI: 'mongodb+srv://nqdcntt2002:doanh2002716@cluster0.jbpwspc.mongodb.net',
        API_ROOT: '/api',
        API_ENDPOINT: 'https://localhost:3000/',
        PORT: 8003,
        IP: 'localhost',
        CLOUDINARY_CLOUD_NAME: 'dq3tanxae',
        CLOUDINARY_API_KEY: '947288579199897',
        CLOUDINARY_API_SECRET: 'IRTjx6shb5rHWza5u4-XqkKFKRs',
        EMAIL_USERNAME: 'nqdcntt2002@gmail.com',
        EMAIL_PASSWORD: 'rbci ryvf eiod oyyv',
        EMAIL_HOST: 'smtp.gmail.com',
        EMAIL_PORT: 465,
      },
      watch_options: {
        followSymlinks: false,
      },
      ignore_watch: ['node_modules', 'src/public'],
      watch: ['src/services', 'src/app'],
    },
    {
      name: 'product-service',
      instances: 1,
      script: './product-service/src/app.js',
      env: {
        NODE_ENV: 'development',
        JWT_SECRET: '123',
        JWT_EXPIRES_IN: '30d',
        MONGODB_URI: 'mongodb+srv://nqdcntt2002:doanh2002716@cluster0.jbpwspc.mongodb.net',
        API_ROOT: '/api',
        API_ENDPOINT: 'https://localhost:3000/',
        PORT: 8002,
        IP: 'localhost',
        CLOUDINARY_CLOUD_NAME: 'dq3tanxae',
        CLOUDINARY_API_KEY: '947288579199897',
        CLOUDINARY_API_SECRET: 'IRTjx6shb5rHWza5u4-XqkKFKRs',
      },
      watch_options: {
        followSymlinks: false,
      },
      ignore_watch: ['node_modules', 'src/public'],
      watch: ['src/services', 'src/app'],
    },
    {
      name: 'review-service',
      instances: 1,
      script: './review-service/src/app.js',
      env: {
        NODE_ENV: 'development',
        JWT_SECRET: '123',
        JWT_EXPIRES_IN: '30d',
        MONGODB_URI: 'mongodb+srv://nqdcntt2002:doanh2002716@cluster0.jbpwspc.mongodb.net',
        API_ROOT: '/api',
        API_ENDPOINT: 'https://localhost:3000/',
        PORT: 8004,
        IP: 'localhost',
        CLOUDINARY_CLOUD_NAME: 'dq3tanxae',
        CLOUDINARY_API_KEY: '947288579199897',
        CLOUDINARY_API_SECRET: 'IRTjx6shb5rHWza5u4-XqkKFKRs',
      },
      watch_options: {
        followSymlinks: false,
      },
      ignore_watch: ['node_modules', 'src/public'],
      watch: ['src/services', 'src/app'],
    },
    {
      name: 'shipment-service',
      instances: 1,
      script: './shipment-service/src/app.js',
      env: {
        NODE_ENV: 'development',
        JWT_SECRET: '123',
        JWT_EXPIRES_IN: '30d',
        MONGODB_URI: 'mongodb+srv://nqdcntt2002:doanh2002716@cluster0.jbpwspc.mongodb.net',
        API_ROOT: '/api',
        API_ENDPOINT: 'https://localhost:3000/',
        PORT: 8007,
        IP: 'localhost',
        CLOUDINARY_CLOUD_NAME: 'dq3tanxae',
        CLOUDINARY_API_KEY: '947288579199897',
        CLOUDINARY_API_SECRET: 'IRTjx6shb5rHWza5u4-XqkKFKRs',
        LOCATION_URL: 'http://sandbox.goship.io/api/v2',
        LOCATION_TOKEN:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjI3ZWJiODJlMTA5YjFiMDdkYzIxZTJhYjA1NGY1YzUwYmE3NGY5MWVjYjI2MWU2NTc2ZGQ4Y2Y0YmQ3Mjg0YmEwYWExMWRlNjNkNjhkMWM3In0.eyJhdWQiOiIxMyIsImp0aSI6IjI3ZWJiODJlMTA5YjFiMDdkYzIxZTJhYjA1NGY1YzUwYmE3NGY5MWVjYjI2MWU2NTc2ZGQ4Y2Y0YmQ3Mjg0YmEwYWExMWRlNjNkNjhkMWM3IiwiaWF0IjoxNzM0NDM4NTEyLCJuYmYiOjE3MzQ0Mzg1MTIsImV4cCI6MjA0OTk3MTMxMiwic3ViIjoiMzM1MSIsInNjb3BlcyI6W119.RiCOKRVzIAZvWRr9v11Ma_rUV-ILDeo5bRWhK3gWVlSXh0Ag0SUySQHU_e76SVi84VrlUJdrWwIs3pmlST1QUp5qCu-cdjzY5JbnUXq_GPQ0om8HlwH4lE91nXcvxECxcNTBL87GLiyb7RBvXIId6C83pI5_PwMsz3eElHxNQao36KeX7YHUs8H0fY3YGkv3Z2aubdz2LQpBsBT23Cm9w1dHInXNomXqpHmNGokNgoDiDGVR_SdnLNVwaRORprZEq46-ipBaStvlJ4ntzvjyQ5q_eOHonWgPbpFW4g-2hrQ3hEh7gRmiXdXLda5YWJkpwzHYvthLFD--ej2ctrlagx7rurvk_uttUpDemGYIuOR2ZIAobBrvtcHlEXCSQK1CM7lbDTAAUBRFOQs3-Pph9oHicGAkHYNFLkSXqfZ3nnvBttWepDukh_Y6o77fpOEr1VvXeuI-pHmyMTEMPCDKj6d0OfSPQ6qh6DF8FLFZep_PLt2c0SMSItenX6RcDY7BkaFH_SfyzKjfx03dCfseiJvzhL2IvLM8xIvdFPDfRFDYGpMrGc2F6Ln8zBfTBsjwbuAET5wh5baJ4WEgFHPIIftyuOEv_LRf2gRHfq8crOxKpja55iS4EJ3ZZuvWQPLzg1JVqK9602VBRAkulIjMUtp1daJVLRx8tLM_QQI-9CU',
      },
      watch_options: {
        followSymlinks: false,
      },
      ignore_watch: ['node_modules', 'src/public'],
      watch: ['src/services', 'src/app'],
    },
    {
      name: 'payment-service',
      instances: 1,
      script: './payment-service/src/app.js',
      env: {
        NODE_ENV: 'development',
        JWT_SECRET: '123',
        JWT_EXPIRES_IN: '30d',
        MONGODB_URI: 'mongodb+srv://nqdcntt2002:doanh2002716@cluster0.jbpwspc.mongodb.net',
        API_ROOT: '/api',
        API_ENDPOINT: 'https://localhost:3000/',
        PORT: 8008,
        IP: 'localhost',
        CLOUDINARY_CLOUD_NAME: 'dq3tanxae',
        CLOUDINARY_API_KEY: '947288579199897',
        CLOUDINARY_API_SECRET: 'IRTjx6shb5rHWza5u4-XqkKFKRs',
      },
      watch_options: {
        followSymlinks: false,
      },
      ignore_watch: ['node_modules', 'src/public'],
      watch: ['src/services', 'src/app'],
    },
  ],
};
