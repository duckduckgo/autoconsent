import { test } from '@playwright/test';
import generateCMPTests from '../playwright/runner';

// The playground no longer instantiates orestbida v3 with #cc-main / .cm-wrapper (config UI only).
// Re-enable when we have a stable live URL that renders the consent modal.
test.describe.skip('cookieconsent3', () => {
    generateCMPTests('cookieconsent3', ['https://playground.cookieconsent.orestbida.com/']);
});
