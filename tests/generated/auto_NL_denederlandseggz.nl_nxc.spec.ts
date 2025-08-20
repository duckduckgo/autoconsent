import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_denederlandseggz.nl_nxc', ['https://www.denederlandseggz.nl/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
