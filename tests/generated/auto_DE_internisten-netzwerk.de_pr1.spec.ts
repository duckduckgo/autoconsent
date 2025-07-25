import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_internisten-netzwerk.de_pr1', ['https://internisten-netzwerk.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
