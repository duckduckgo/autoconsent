import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_dictionary.reverso.net_l46', ['https://dictionary.reverso.net/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
