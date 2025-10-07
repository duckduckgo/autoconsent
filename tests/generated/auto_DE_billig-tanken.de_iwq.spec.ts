import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_billig-tanken.de_iwq', ['https://www.billig-tanken.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
