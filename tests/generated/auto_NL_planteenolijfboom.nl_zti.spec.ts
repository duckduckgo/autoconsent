import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_planteenolijfboom.nl_zti', ['https://www.planteenolijfboom.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
