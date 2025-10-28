import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_medishare.com_6yi', ['https://www.medishare.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
