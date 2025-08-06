import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_flevoziekenhuis.nl_vji', ['https://flevoziekenhuis.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
