/**
 * Sample test spec that uses the isolated world runner (Chromium only).
 *
 * This demonstrates how the content script can be injected into a CDP
 * isolated world to more accurately replicate the production extension
 * environment. Only runs with the 'chrome' project.
 *
 * Run: npx playwright test tests/_isolated-world-sample.spec.ts --project chrome
 */

import generateIsolatedWorldCMPTests from '../playwright/isolated-world-runner';

// Test using the test page CMP, which uses eval steps — perfect for
// verifying the isolated world <-> main world eval bridge.
generateIsolatedWorldCMPTests('Test page CMP', ['https://privacy-test-pages.site/features/autoconsent/'], {
    testOptIn: false,
});
