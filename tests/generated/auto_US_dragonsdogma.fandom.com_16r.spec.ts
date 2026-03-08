import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_dragonsdogma.fandom.com_16r', ['https://dragonsdogma.fandom.com/wiki/Dragon%27s_Dogma_Wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
