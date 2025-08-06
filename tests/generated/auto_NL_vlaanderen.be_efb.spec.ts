import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vlaanderen.be_efb', ['https://www.vlaanderen.be/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
