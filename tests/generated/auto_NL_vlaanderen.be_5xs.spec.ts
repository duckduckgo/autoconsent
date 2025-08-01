import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vlaanderen.be_5xs', ['https://www.vlaanderen.be/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
