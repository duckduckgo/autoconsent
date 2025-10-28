import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bijsluiterplus.nl_03a', ['https://www.bijsluiterplus.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
