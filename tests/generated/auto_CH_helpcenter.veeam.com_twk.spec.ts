import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_helpcenter.veeam.com_twk', ['https://helpcenter.veeam.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
