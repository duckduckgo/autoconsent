import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_canon-europe.com_smi', ['https://www.canon-europe.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
