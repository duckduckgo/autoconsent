import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_panamajack.nl_rzk', ['https://www.panamajack.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
