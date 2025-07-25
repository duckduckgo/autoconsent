import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_boulanger.com_ha5', ['https://www.boulanger.com/magasins/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
