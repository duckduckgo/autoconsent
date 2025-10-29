import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_voorrecht-rechtspraak.nl_nzg', ['https://www.voorrecht-rechtspraak.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
