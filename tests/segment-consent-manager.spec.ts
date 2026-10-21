import generateCMPTests from '../playwright/runner';

// the page reloads after consent is revoked, so the self-test runs on a fresh page
generateCMPTests('segment-consent-manager', ['https://www.unisc.edu.au/', 'https://docs.particle.io/'], {
    testSelfTest: false,
});
