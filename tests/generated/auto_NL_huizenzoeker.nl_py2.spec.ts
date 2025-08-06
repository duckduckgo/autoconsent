import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_huizenzoeker.nl_py2', ['https://www.huizenzoeker.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
