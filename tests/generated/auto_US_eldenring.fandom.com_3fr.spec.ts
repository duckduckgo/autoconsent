import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_eldenring.fandom.com_3fr', ['https://eldenring.fandom.com/wiki/Elden_Ring_Wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
