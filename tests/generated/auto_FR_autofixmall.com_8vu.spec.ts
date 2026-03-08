import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_autofixmall.com_8vu', ['https://autofixmall.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
