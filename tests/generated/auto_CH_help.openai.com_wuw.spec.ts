import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_help.openai.com_wuw', ['https://help.openai.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
