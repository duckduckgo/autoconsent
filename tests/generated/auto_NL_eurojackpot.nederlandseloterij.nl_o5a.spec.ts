import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_eurojackpot.nederlandseloterij.nl_o5a', ['https://eurojackpot.nederlandseloterij.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
