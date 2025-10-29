import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_deurengigant.nl_ha7', ['https://www.deurengigant.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
