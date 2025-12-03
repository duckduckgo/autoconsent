import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_carfromjapan.com_0', ['https://carfromjapan.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
