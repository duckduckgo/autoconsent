import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_btf-thyroid.org_7cy', ['https://www.btf-thyroid.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
