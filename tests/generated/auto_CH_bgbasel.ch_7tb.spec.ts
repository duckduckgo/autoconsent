import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bgbasel.ch_7tb', ['https://bgbasel.ch/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
