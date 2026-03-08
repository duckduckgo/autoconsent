import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_communitydirectory.norfolk.gov.uk_yya', ['https://communitydirectory.norfolk.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
