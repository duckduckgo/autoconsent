import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.honestbeeltd.com_29q', ['https://de.honestbeeltd.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
