import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_netbeheernederland.nl_juo', ['https://www.netbeheernederland.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
