import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_klinikum-stuttgart.de_lem', ['https://www.klinikum-stuttgart.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
