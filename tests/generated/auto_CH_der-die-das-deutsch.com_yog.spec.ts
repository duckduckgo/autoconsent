import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_der-die-das-deutsch.com_yog', ['https://der-die-das-deutsch.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
