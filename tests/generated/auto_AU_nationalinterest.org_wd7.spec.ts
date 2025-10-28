import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_nationalinterest.org_wd7', ['https://nationalinterest.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
