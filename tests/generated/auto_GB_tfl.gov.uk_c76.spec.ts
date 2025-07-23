import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_tfl.gov.uk_c76', ['https://tfl.gov.uk/plan-a-journey/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
