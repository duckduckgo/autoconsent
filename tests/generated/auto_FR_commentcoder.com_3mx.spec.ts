import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_commentcoder.com_3mx', ['https://www.commentcoder.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
