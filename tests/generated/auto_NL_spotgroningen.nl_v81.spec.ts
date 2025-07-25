import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_spotgroningen.nl_v81', ['https://www.spotgroningen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
