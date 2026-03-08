import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dug-glashuette.com_6ew', ['https://dug-glashuette.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
