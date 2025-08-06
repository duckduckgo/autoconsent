import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_m-net.de_t3k', ['https://www.m-net.de/privatkunden'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
