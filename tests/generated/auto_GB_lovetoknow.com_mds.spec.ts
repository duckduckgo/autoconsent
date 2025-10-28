import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_lovetoknow.com_mds', ['https://www.lovetoknow.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
