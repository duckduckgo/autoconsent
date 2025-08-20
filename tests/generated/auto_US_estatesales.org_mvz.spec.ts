import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_estatesales.org_mvz', ['https://estatesales.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
