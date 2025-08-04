import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_onlyoffice.com_y8y', ['https://www.onlyoffice.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
