import generateCMPTests from '../playwright/runner';

generateCMPTests('eu-cookie-compliance-banner', ['https://healthcare.utah.edu/']);

// categories variant: saving preferences also sets cookie-agreed=2, so the self-test does not apply
generateCMPTests('eu-cookie-compliance-banner', ['https://www.mcgill.ca/', 'https://www.epo.org/'], {
    testSelfTest: false,
});
