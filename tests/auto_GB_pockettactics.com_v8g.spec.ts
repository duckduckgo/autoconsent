import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_pockettactics.com_v8g', ['https://www.pockettactics.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
