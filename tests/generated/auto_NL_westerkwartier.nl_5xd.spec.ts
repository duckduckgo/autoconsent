import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_westerkwartier.nl_5xd', ['https://www.westerkwartier.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
