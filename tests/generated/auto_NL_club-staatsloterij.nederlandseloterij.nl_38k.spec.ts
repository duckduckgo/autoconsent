import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_club-staatsloterij.nederlandseloterij.nl_38k', ['https://club-staatsloterij.nederlandseloterij.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
