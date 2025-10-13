import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_maandvandegeschiedenis.nl_wmv', ['https://www.maandvandegeschiedenis.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
