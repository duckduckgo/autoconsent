import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.mytrainpal.com_03p', ['https://de.mytrainpal.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
