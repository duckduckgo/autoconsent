import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_internetbode.nl_239', ['https://www.internetbode.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
