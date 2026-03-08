import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_findingspress.org_vwx', ['https://findingspress.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
