import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_messerworld.de_ufl', ['https://www.messerworld.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
