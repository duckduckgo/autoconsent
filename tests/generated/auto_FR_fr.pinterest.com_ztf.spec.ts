import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.pinterest.com_ztf', ['https://fr.pinterest.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
