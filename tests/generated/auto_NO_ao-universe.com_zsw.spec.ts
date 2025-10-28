import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_ao-universe.com_zsw', ['https://www.ao-universe.com/main/news'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
