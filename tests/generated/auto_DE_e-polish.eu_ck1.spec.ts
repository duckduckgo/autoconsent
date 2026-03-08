import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_e-polish.eu_ck1', ['https://e-polish.eu/polish-for-foreigners'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
