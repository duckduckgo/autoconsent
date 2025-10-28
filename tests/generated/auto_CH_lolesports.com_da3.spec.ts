import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_lolesports.com_da3', ['https://lolesports.com/de-DE/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
