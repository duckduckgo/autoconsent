import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_lolesports.com_uhm', ['https://lolesports.com/en-GB/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
