import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_m-net.de_dpj', ['https://www.m-net.de/privatkunden'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
