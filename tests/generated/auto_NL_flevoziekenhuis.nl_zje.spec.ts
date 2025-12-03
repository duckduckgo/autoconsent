import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_flevoziekenhuis.nl_zje', ['https://flevoziekenhuis.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
