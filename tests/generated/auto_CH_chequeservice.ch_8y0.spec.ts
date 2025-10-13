import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_chequeservice.ch_8y0', ['https://www.chequeservice.ch/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
