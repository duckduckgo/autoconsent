import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_chienderace.eu_uwh', ['https://www.chienderace.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
