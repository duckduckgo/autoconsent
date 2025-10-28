import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_onlinelibrary.wiley.com_vy7', ['https://onlinelibrary.wiley.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
