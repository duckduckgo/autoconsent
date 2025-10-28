import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_wellcomecollection.org_5c2', ['https://wellcomecollection.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
