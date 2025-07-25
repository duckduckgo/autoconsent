import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_keesvanderspek.nl_qvp', ['https://www.keesvanderspek.nl/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
