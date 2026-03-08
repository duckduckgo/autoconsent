import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_regular.animecon.nl_2k8', ['https://animecon.nl/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
