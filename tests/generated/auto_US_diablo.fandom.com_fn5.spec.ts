import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_diablo.fandom.com_fn5', ['https://diablo.fandom.com/wiki/Diablo_Wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
