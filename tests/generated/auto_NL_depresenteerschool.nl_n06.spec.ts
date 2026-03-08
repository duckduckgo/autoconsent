import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_depresenteerschool.nl_n06', ['https://depresenteerschool.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
