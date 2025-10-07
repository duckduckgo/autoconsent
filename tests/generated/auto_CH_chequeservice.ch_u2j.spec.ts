import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_chequeservice.ch_u2j', ['https://www.chequeservice.ch/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
