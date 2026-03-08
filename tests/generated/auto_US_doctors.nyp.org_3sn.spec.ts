import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_doctors.nyp.org_3sn', ['https://doctors.nyp.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
