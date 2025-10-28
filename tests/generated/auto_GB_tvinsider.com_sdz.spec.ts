import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_tvinsider.com_sdz', ['https://www.tvinsider.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
