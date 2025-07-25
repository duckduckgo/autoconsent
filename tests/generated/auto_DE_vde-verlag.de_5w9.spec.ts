import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vde-verlag.de_5w9', ['https://www.vde-verlag.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
