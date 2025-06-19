import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_iopscience.iop.org_dta', ['https://iopscience.iop.org/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
