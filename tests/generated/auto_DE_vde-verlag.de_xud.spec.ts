import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vde-verlag.de_xud', ['https://www.vde-verlag.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
