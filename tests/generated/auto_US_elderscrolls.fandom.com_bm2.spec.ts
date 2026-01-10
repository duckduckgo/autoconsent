import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_elderscrolls.fandom.com_bm2', ['https://elderscrolls.fandom.com/wiki/The_Elder_Scrolls_Wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
