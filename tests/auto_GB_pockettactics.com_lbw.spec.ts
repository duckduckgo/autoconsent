import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_pockettactics.com_lbw', ['https://www.pockettactics.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
