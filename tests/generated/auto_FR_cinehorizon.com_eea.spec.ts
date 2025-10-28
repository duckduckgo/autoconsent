import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cinehorizon.com_eea', ['https://cinehorizon.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
