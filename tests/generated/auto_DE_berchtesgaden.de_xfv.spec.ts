import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_berchtesgaden.de_xfv', ['https://www.berchtesgaden.de/home'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
