import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_visit-dorset.com_g0q', ['https://www.visit-dorset.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
