import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_fleurofengland.com_5pm', ['https://fleurofengland.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
