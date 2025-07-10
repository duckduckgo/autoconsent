import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_sparknotes.com_8ce', ['https://www.sparknotes.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
