import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_denieuwebibliotheek.nl_c1z', ['https://www.denieuwebibliotheek.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
