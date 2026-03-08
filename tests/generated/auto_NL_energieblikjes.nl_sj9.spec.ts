import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_energieblikjes.nl_sj9', ['https://energieblikjes.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
