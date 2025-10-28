import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_geschaeftskunden.telekom.de_92k', ['https://geschaeftskunden.telekom.de/business/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
