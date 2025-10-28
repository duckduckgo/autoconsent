import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ieeexplore.ieee.org_ufn', ['https://ieeexplore.ieee.org/Xplore/home.jsp'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
