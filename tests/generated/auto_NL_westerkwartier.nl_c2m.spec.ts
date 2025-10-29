import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_westerkwartier.nl_c2m', ['https://www.westerkwartier.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
