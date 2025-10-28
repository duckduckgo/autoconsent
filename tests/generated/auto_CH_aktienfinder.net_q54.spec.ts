import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_aktienfinder.net_q54', ['https://aktienfinder.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
