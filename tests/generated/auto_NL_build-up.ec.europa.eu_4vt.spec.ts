import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_build-up.ec.europa.eu_4vt', ['https://build-up.ec.europa.eu/en/home'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
