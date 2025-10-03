import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_billig-tanken.de_50e', ['https://www.billig-tanken.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
