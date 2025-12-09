import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_panamajack.de_ry8', ['https://www.panamajack.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
