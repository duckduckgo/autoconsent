import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_nationalgalleries.org_7bf', ['https://www.nationalgalleries.org/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
