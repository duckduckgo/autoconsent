import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_eba.europa.eu_qpk', ['https://www.eba.europa.eu/homepage'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
