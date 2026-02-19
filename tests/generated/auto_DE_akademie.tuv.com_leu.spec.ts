import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_akademie.tuv.com_leu', ['https://akademie.tuv.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
