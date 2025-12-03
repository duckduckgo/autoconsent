import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bistum-muenster.de_hej', ['https://www.bistum-muenster.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
