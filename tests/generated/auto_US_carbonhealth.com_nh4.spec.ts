import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_carbonhealth.com_nh4', ['https://carbonhealth.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
