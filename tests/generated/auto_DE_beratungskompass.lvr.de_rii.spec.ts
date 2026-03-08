import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_beratungskompass.lvr.de_rii', ['https://beratungskompass.lvr.de/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
