import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_diablo-archive.fandom.com_525', ['https://diablo-archive.fandom.com/wiki/Diablo_III_Wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
