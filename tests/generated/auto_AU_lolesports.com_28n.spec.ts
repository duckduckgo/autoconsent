import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_lolesports.com_28n', ['https://lolesports.com/en-AU/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
