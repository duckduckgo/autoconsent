import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_m-net.de_myz', ['https://www.m-net.de/privatkunden'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
