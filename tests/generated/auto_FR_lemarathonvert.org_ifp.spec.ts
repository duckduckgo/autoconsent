import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lemarathonvert.org_ifp', ['https://www.lemarathonvert.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
