import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_mercerine.com_ndg', ['https://www.mercerine.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
