import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.pinterest.com_5xo', ['https://de.pinterest.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
