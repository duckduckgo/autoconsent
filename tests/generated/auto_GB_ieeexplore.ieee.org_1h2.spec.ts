import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ieeexplore.ieee.org_1h2', ['https://ieeexplore.ieee.org/Xplore/home.jsp'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
