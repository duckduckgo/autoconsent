import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_lolesports.com_wq8', ['https://lolesports.com/en-AU/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
