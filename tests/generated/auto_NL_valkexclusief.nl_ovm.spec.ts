import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_valkexclusief.nl_ovm', ['https://www.valkexclusief.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
