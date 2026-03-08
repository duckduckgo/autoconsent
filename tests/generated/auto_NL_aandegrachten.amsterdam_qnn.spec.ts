import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_aandegrachten.amsterdam_qnn', ['https://aandegrachten.amsterdam/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
