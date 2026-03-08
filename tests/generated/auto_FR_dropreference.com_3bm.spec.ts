import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dropreference.com_3bm', ['https://dropreference.com/en/home'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
