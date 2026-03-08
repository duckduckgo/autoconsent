import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_diemittezh-wahlen.ch_30m', ['https://diemittezh-wahlen.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
