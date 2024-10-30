import { z } from 'zod';

const envConfigSchema = z.object({
    ENVIRONMENT: z.string(),
    DB_HOST: z.string(),
    DB_PORT: z.string(),
    DB_USER_NAME: z.string(),
    DB_PASSWORD: z.string(),
    DB_NAME: z.string(),
    REFRESH_TOKEN_EXPIRY: z.string(),
    JWT_SECRET: z.string(),
    JWT_VERIFICATION_TOKEN_SECRET: z.string(),
    JWT_VERIFICATION_TOKEN_EXPIRATION_TIME: z.string(),
    EMAIL_CONFIRMATION_URL: z.string(),
    APP_ID: z.string(),
    APP_SECRET: z.string(),
    GOOGLE_CLIENT_ID: z.string(),
    GOOGLE_SECRET: z.string(),
    FORGOT_PASSWORD_URL: z.string(),
    LOGIN_CODE_EXPIRY: z.string(),
    FILE_SIZE: z.string(),
    MAIL_HOST: z.string(),
    MAIL_PORT: z.string(),
    MAIL_USERNAME: z.string(),
    MAIL_PASSWORD: z.string(),
    MAIL_FROM: z.string(),
    LOGIN_ATTEMPTS: z.string(),
    REDIS_HOST: z.string(),
    REDIS_PORT: z.string(),
    SUPER_ADMIN_EMAIL: z.string(),
    MAIL_TO: z.string(),
  })
  .partial();
export let envConfig: z.infer<typeof envConfigSchema>;

export async function loadEnvConfig() {
  envConfig = await envConfigSchema.parseAsync(process.env);
}
