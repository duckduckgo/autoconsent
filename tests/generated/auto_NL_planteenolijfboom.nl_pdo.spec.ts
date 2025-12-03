import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_planteenolijfboom.nl_pdo', ['https://www.planteenolijfboom.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
