import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_wildlifetrusts.org_3eo', ['https://www.wildlifetrusts.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
