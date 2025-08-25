import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_onlyoffice.com_wie', ['https://www.onlyoffice.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
