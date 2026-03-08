import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bibelfit.markusvoss.net_xy8', ['https://bibelfit.markusvoss.net/s/markusvossde'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
