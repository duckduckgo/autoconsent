import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_schreibers.ch_35r', ['https://www.schreibers.ch/home'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
