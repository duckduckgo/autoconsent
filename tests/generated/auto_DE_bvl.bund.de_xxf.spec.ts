import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bvl.bund.de_xxf', ['https://www.bvl.bund.de/DE/Home/home_node.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
