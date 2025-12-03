import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_platform.openai.com_g5y', ['https://platform.openai.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
