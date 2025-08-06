import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_valkexclusief.nl_w5q', ['https://www.valkexclusief.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
