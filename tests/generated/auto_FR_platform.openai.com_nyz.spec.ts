import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_platform.openai.com_nyz', ['https://platform.openai.com/docs/overview'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
