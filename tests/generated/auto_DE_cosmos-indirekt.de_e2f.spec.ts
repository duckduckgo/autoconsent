import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_cosmos-indirekt.de_e2f', ['https://www.cosmos-indirekt.de/index.php'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
