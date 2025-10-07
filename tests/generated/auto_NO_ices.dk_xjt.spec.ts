import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_ices.dk_xjt', ['https://www.ices.dk/Pages/default.aspx'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
