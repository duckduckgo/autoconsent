import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_sterkindekeuken.nl_3ea', ['https://sterkindekeuken.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
