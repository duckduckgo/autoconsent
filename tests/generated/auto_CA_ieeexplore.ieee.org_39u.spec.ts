import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_ieeexplore.ieee.org_39u', ['https://ieeexplore.ieee.org/Xplore/home.jsp'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
