import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_museum-barberini.de_9jg', ['https://www.museum-barberini.de/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
