import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bewerbungsvorlagen.de_emd', ['https://bewerbungsvorlagen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
