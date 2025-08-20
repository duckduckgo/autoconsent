import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_help.openai.com_0w6', ['https://help.openai.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
