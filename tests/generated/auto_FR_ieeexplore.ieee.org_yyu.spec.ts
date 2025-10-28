import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ieeexplore.ieee.org_yyu', ['https://ieeexplore.ieee.org/Xplore/home.jsp'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
