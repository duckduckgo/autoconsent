import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_volkswagen.nl_qwh', ['https://www.volkswagen.nl/nl.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
