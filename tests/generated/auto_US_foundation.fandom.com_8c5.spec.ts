import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_foundation.fandom.com_8c5', ['https://foundation.fandom.com/wiki/Foundation_Wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
