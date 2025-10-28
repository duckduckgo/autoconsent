import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_oxford-union.org_95u', ['https://oxford-union.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
