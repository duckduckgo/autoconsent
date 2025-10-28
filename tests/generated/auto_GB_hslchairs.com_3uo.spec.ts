import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_hslchairs.com_3uo', ['https://www.hslchairs.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
