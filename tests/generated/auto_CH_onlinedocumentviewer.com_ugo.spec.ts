import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_onlinedocumentviewer.com_ugo', ['http://onlinedocumentviewer.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
