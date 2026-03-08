import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_apotheek.mumc.nl_d7y', ['https://apotheek.mumc.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
