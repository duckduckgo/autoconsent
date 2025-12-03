import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_gymgrossisten.com_504', ['https://www.gymgrossisten.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
