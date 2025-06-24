import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_researchgate.net_0', ['https://www.researchgate.net/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
