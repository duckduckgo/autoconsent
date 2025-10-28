import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_urbandictionary.com_7fq', ['https://www.urbandictionary.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
