import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_visitgooivecht.nl_uvr', ['https://www.visitgooivecht.nl/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
