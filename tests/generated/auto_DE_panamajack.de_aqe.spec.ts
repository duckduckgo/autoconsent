import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_panamajack.de_aqe', ['https://www.panamajack.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
