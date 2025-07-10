import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_historyextra.com_58y', ['https://www.historyextra.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
