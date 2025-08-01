import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_breitbandmessung.de_8tw', ['https://www.breitbandmessung.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
