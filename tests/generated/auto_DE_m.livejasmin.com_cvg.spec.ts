import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_m.livejasmin.com_cvg', ['https://www.livejasmin.com/en/girls/?forcedesktop=1'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
