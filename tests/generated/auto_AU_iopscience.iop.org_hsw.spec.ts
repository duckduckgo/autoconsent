import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_iopscience.iop.org_hsw', ['https://iopscience.iop.org/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
