import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_blogdumoderateur.com_8p6', ['https://www.blogdumoderateur.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
