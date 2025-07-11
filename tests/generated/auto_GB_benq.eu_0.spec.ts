import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_benq.eu_0', ['https://www.benq.eu/en-uk/index.html'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
