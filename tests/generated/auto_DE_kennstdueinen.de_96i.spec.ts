import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kennstdueinen.de_96i', ['https://www.kennstdueinen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
