import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_cobbleverse.fandom.com_p03', ['https://cobbleverse.fandom.com/wiki/CobbleVerse_Wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
