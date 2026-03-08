import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cornishlithium.com_y67', ['https://cornishlithium.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
