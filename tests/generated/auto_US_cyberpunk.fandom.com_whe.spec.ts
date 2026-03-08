import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_cyberpunk.fandom.com_whe', ['https://cyberpunk.fandom.com/wiki/Cyberpunk_Wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
