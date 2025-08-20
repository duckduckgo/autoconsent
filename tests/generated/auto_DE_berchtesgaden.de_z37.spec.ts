import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_berchtesgaden.de_z37', ['https://www.berchtesgaden.de/home'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
