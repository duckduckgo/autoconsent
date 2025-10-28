import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_watchmojo.com_kqf', ['https://www.watchmojo.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
