import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nederlandseloterij.nl_b60', ['https://www.nederlandseloterij.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
