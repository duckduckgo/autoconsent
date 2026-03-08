import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_admin.certnet.de_aim', ['https://admin.certnet.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
