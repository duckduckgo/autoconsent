import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_helpcenter.onlyoffice.com_uxj', ['https://helpcenter.onlyoffice.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
