import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_langchain.com_sxv', ['https://www.langchain.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
