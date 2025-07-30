import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vanwalraven.com_qcl', ['https://www.vanwalraven.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
