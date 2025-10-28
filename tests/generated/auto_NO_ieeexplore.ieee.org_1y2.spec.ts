import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_ieeexplore.ieee.org_1y2', ['https://ieeexplore.ieee.org/Xplore/home.jsp'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
