import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_farcry.fandom.com_aq5', ['https://farcry.fandom.com/wiki/Far_Cry_Wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
