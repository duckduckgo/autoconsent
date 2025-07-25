import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_valkexclusief.nl_c2g', ['https://www.valkexclusief.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
