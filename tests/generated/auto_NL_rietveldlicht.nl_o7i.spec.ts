import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rietveldlicht.nl_o7i', ['https://www.rietveldlicht.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
