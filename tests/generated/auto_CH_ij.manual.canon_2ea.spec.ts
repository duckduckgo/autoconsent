import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ij.manual.canon_2ea', ['https://ij.manual.canon/ij/webmanual/WebPortal/PTL/ptl-top.html?lng=en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
