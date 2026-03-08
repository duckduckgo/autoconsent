import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_discworld.fandom.com_f46', ['https://discworld.fandom.com/wiki/Main_Page'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
