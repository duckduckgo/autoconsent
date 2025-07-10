import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_ieeexplore.ieee.org_2x9', ['https://ieeexplore.ieee.org/Xplore/home.jsp'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
