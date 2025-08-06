import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_echosdunet.net_u5i', ['https://www.echosdunet.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
