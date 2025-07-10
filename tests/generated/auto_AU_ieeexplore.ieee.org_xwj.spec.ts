import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_ieeexplore.ieee.org_xwj', ['https://ieeexplore.ieee.org/Xplore/home.jsp'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
