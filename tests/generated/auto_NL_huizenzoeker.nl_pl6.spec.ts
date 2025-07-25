import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_huizenzoeker.nl_pl6', ['https://www.huizenzoeker.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
