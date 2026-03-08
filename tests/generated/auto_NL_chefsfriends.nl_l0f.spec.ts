import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_chefsfriends.nl_l0f', ['https://chefsfriends.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
