import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_guggenheim.org_m1o', ['https://www.guggenheim.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
