import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_internisten-netzwerk.de_vly', ['https://internisten-netzwerk.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
