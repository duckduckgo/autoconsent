import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_statkraft.com_0bn', ['https://www.statkraft.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
