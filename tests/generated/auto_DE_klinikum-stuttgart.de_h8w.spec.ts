import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_klinikum-stuttgart.de_h8w', ['https://www.klinikum-stuttgart.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
