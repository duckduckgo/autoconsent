import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ieeexplore.ieee.org_7so', ['https://ieeexplore.ieee.org/Xplore/home.jsp'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
