import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_nutriandco.com_dp9', ['https://nutriandco.com/fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
