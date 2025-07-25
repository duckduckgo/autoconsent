import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_raetselhilfe.net_cbv', ['https://www.raetselhilfe.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
