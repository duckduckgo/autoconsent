import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_stadtplandienst.de_65a', ['https://stadtplandienst.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
