import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_nationalgrid.com_aij', ['https://www.nationalgrid.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
