import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_agupubs.onlinelibrary.wiley.com_g36', ['https://agupubs.onlinelibrary.wiley.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
