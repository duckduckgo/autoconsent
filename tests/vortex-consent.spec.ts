import generateCMPTests from '../playwright/runner';

// the page reloads right after the opt-out click, so the self-test cannot run
generateCMPTests('vortex-consent', ['https://www.uio.no/', 'https://www.aho.no/', 'https://www.inn.no/', 'https://www.nih.no/'], {
    testSelfTest: false,
});
