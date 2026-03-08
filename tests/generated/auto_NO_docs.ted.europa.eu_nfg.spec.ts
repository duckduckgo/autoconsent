import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_docs.ted.europa.eu_nfg', ['https://docs.ted.europa.eu/home/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
