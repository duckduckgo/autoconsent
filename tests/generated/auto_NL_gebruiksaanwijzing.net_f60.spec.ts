import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_gebruiksaanwijzing.net_f60', ['https://www.gebruiksaanwijzing.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
