import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bluediamond.gg_ojv', ['https://www.bluediamond.gg/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
