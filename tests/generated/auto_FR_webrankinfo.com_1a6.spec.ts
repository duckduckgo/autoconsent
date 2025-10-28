import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_webrankinfo.com_1a6', ['https://www.webrankinfo.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
