import generateCMPTests from '../../playwright/runner';
generateCMPTests('livejasmin.com', ['https://www.livejasmin.com/en/girls?forcedesktop=1'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
