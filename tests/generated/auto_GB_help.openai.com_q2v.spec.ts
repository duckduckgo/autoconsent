import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_help.openai.com_q2v', ['https://help.openai.com/en'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
