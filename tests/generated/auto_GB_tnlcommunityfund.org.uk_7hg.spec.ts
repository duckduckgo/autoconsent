import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_tnlcommunityfund.org.uk_7hg', ['https://www.tnlcommunityfund.org.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
