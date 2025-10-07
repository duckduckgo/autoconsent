import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_leuchtturm1917.de_59m', ['https://www.leuchtturm1917.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
