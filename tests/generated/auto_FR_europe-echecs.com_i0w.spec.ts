import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_europe-echecs.com_i0w', ['https://www.europe-echecs.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
