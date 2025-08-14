import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_opmaatzagen.nl_euu', ['https://www.opmaatzagen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
