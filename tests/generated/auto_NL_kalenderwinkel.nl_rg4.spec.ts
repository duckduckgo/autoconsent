import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_kalenderwinkel.nl_rg4', ['https://www.kalenderwinkel.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
