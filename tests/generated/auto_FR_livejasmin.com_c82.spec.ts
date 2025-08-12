import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_livejasmin.com_c82', ['https://www.livejasmin.com/en/girls?forcedesktop=1'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
