import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_fitnessspecialisten.nl_s7x', ['https://www.fitnessspecialisten.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
