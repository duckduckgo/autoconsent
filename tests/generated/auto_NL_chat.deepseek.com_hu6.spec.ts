import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_chat.deepseek.com_hu6', ['https://chat.deepseek.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
