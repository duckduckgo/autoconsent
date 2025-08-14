import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_suisse-epolice.ch_yh8', ['https://www.suisse-epolice.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
