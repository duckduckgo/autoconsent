import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cks.nice.org.uk_ca6', ['https://cks.nice.org.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
