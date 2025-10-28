import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_assetware-technology.com_mun', ['https://www.assetware-technology.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
