import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_frankfurtticket.de_kmo', ['https://www.frankfurtticket.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
