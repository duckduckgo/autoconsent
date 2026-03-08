import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_arrca-carrelage.fr_e8v', ['https://arrca-carrelage.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
