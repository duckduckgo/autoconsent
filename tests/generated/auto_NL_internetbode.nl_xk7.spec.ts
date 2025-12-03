import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_internetbode.nl_xk7', ['https://www.internetbode.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
