import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_lolesports.com_cez', ['https://lolesports.com/en-US/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
