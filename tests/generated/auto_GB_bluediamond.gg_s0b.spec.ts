import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bluediamond.gg_s0b', ['https://www.bluediamond.gg/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
