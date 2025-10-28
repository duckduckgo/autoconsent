import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_ieeexplore.ieee.org_pq6', ['https://ieeexplore.ieee.org/Xplore/home.jsp'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
