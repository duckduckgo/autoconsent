import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_internisten-netzwerk.de_w4o', ['https://internisten-netzwerk.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
