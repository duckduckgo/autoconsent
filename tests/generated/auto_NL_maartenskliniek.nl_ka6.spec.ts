import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_maartenskliniek.nl_ka6', ['https://www.maartenskliniek.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
