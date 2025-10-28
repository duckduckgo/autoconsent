import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_zyxel.com_j48', ['https://www.zyxel.com/ch/de-ch/home'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
