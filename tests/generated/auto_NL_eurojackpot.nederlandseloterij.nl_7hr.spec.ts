import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_eurojackpot.nederlandseloterij.nl_7hr', ['https://eurojackpot.nederlandseloterij.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
