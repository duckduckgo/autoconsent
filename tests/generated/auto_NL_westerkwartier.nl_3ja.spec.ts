import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_westerkwartier.nl_3ja', ['https://www.westerkwartier.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
