import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bispingen.snowworld.com_22z', ['https://bispingen.snowworld.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
