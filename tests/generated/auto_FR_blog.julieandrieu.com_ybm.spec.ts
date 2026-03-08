import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_blog.julieandrieu.com_ybm', ['https://blog.julieandrieu.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
