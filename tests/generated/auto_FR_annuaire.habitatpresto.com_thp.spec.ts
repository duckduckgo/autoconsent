import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_annuaire.habitatpresto.com_thp', ['https://annuaire.habitatpresto.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
