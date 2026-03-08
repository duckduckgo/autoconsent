import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_esdac.jrc.ec.europa.eu_g6v', ['https://esdac.jrc.ec.europa.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
