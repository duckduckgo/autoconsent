import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ij.manual.canon_w65', ['https://ij.manual.canon/ij/webmanual/WebPortal/PTL/ptl-top.html?lng=en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
