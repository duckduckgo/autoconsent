import { esbuildPlugin } from '@web/dev-server-esbuild';
import { playwrightLauncher } from '@web/test-runner-playwright';
import { fileURLToPath } from 'url';

export default {
    files: ['tests-wtr/**/*.html', 'tests-wtr/**/*.test.ts'],
    nodeResolve: true,
    // Use Playwright's pinned Chromium rather than the CI image's system Chrome, which is slow to cold-start
    browsers: [playwrightLauncher({ product: 'chromium', launchOptions: { timeout: 120000 } })],
    // Defaults are 30s; a slow first browser launch on CI otherwise fails every test file
    browserStartTimeout: 120000,
    testsStartTimeout: 120000,
    plugins: [
        esbuildPlugin({
            ts: true,
            tsconfig: fileURLToPath(new URL('./tsconfig.json', import.meta.url)),
            target: 'es2021',
            json: true,
        }),
    ],
};
