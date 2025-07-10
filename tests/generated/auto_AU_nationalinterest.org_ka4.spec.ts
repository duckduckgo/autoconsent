import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_nationalinterest.org_ka4', ['https://nationalinterest.org/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
