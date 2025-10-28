import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ieeexplore.ieee.org_arr', ['https://ieeexplore.ieee.org/Xplore/home.jsp'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
