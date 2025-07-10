import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_tvinsider.com_kni', ['https://www.tvinsider.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
