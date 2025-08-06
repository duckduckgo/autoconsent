import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nederlandseloterij.nl_1lp', ['https://www.nederlandseloterij.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
