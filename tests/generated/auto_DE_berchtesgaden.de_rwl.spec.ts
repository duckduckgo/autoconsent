import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_berchtesgaden.de_rwl', ['https://www.berchtesgaden.de/home'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
