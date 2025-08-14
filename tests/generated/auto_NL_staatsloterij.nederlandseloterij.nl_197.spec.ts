import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_staatsloterij.nederlandseloterij.nl_197', ['https://staatsloterij.nederlandseloterij.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
