import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_edinburghgeolsoc.org_k5f', ['https://edinburghgeolsoc.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
