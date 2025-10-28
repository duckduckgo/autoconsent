import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_gutscharity.org.uk_0cg', ['https://gutscharity.org.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
