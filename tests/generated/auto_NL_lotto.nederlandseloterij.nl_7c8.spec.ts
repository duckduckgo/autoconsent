import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_lotto.nederlandseloterij.nl_7c8', ['https://lotto.nederlandseloterij.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
