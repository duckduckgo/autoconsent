import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_apple.fandom.com_p12', ['https://apple.fandom.com/wiki/Main_Screen'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
