import { defineConfig } from "@playwright/test";

const ENV = process.env.TEST_ENV || 'local';

const baseURL = {
    local: 'http://localhost:3000',
    staging: 'https://staging.example.com',
    production: 'https://example.com'
}

export default defineConfig({
    use: {
        headless: false,
        baseURL: baseURL[ENV],
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        launchOptions: {
            slowMo: 3000,
        },
    },
    reporter: 'html'
});