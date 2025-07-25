import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_gymgrossisten.com_puh', ['https://www.gymgrossisten.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
