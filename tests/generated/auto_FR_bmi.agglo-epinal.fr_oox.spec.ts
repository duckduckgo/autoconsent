import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bmi.agglo-epinal.fr_oox', ['https://bmi.agglo-epinal.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
