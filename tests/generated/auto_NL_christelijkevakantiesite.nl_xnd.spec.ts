import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_christelijkevakantiesite.nl_xnd', ['https://christelijkevakantiesite.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
