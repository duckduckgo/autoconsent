import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rietveldlicht.nl_goo', ['https://www.rietveldlicht.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
