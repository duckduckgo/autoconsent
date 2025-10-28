import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bijnametpensioen.nl_e5e', ['https://bijnametpensioen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
