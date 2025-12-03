import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_emp-online.ch_zth', ['https://www.emp-online.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
