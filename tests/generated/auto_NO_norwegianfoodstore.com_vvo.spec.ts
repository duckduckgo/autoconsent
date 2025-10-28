import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_norwegianfoodstore.com_vvo', ['https://norwegianfoodstore.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
