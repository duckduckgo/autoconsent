import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_flitsmeister.nl_rpg', ['https://www.flitsmeister.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
