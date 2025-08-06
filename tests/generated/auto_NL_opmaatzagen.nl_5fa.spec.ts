import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_opmaatzagen.nl_5fa', ['https://www.opmaatzagen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
