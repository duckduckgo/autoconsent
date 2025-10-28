import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ieeexplore.ieee.org_pr5', ['https://ieeexplore.ieee.org/Xplore/home.jsp'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
