import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_explore.osmaps.com_sd2', ['https://explore.osmaps.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
