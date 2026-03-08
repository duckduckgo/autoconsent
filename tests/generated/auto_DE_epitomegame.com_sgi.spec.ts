import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_epitomegame.com_sgi', ['https://epitomegame.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
