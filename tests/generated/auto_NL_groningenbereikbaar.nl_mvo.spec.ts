import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_groningenbereikbaar.nl_mvo', ['https://www.groningenbereikbaar.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
