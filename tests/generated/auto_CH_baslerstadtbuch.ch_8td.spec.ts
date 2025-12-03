import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_baslerstadtbuch.ch_8td', ['https://www.baslerstadtbuch.ch/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
