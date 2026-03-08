import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_elderscrolls.fandom.com_f6z', ['https://elderscrolls.fandom.com/wiki/The_Elder_Scrolls_Wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
