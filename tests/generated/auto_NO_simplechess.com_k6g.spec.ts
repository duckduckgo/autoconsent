import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_simplechess.com_k6g', ['https://www.simplechess.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
