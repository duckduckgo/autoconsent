import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_tvinsider.com_22a', ['https://www.tvinsider.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
