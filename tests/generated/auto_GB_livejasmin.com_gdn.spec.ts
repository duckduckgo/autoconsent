import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_livejasmin.com_gdn', ['https://www.livejasmin.com/en/girls?forcedesktop=1'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
