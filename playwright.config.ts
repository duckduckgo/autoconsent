import { PlaywrightTestConfig, devices } from '@playwright/test';

const proxy = process.env.PROXY_SERVER ? { server: process.env.PROXY_SERVER } : undefined

const config: PlaywrightTestConfig = {
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  testDir: 'tests',
  use: {
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        proxy,
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        proxy,
      },
    }
  ],
};
export default config;