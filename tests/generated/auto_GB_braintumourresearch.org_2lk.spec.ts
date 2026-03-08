import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_braintumourresearch.org_2lk', ['https://braintumourresearch.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
