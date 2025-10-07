import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_babel.hathitrust.org_n67', ['https://babel.hathitrust.org/cgi/mb'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
