import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_arthritis-uk.org_92o', ['https://www.arthritis-uk.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
