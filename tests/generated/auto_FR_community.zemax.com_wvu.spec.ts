import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_community.zemax.com_wvu', ['https://community.zemax.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
