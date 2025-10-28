import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_education.gov.scot_bpt', ['https://education.gov.scot/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
