import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_dyinglight.fandom.com_hi8', ['https://dyinglight.fandom.com/wiki/Dying_Light_Wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
