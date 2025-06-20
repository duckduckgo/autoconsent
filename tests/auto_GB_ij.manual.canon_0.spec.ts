import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_ij.manual.canon_0', ['https://ij.manual.canon/ij/webmanual/WebPortal/PTL/ptl-top.html?lng=en'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
