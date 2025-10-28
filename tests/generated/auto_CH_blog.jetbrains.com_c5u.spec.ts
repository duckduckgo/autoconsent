import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_blog.jetbrains.com_c5u', ['https://blog.jetbrains.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
