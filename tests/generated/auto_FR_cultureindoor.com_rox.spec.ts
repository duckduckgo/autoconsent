import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cultureindoor.com_rox', ['https://www.cultureindoor.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
