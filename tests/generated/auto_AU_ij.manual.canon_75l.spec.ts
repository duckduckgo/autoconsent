import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_ij.manual.canon_75l', ['https://ij.manual.canon/ij/webmanual/WebPortal/PTL/ptl-top.html?lng=en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
