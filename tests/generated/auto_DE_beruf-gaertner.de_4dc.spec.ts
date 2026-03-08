import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_beruf-gaertner.de_4dc', ['https://beruf-gaertner.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
