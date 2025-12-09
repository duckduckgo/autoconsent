import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_accucompany.nl_a62', ['https://www.accucompany.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
