import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_anybookreader.de_paa', ['https://anybookreader.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
