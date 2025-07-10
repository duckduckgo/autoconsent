import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_historyskills.com_cwb', ['https://www.historyskills.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
