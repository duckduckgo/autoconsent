import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_deblauwevogel.be_aj9', ['https://deblauwevogel.be/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
