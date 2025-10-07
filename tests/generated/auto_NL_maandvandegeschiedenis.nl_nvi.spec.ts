import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_maandvandegeschiedenis.nl_nvi', ['https://www.maandvandegeschiedenis.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
