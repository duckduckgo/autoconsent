import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_stiebel-eltron.ch_t04', ['https://www.stiebel-eltron.ch/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
