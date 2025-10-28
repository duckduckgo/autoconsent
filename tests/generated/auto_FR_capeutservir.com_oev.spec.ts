import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_capeutservir.com_oev', ['https://www.capeutservir.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
