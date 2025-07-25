import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_barnes-international.com_sf5', ['https://www.barnes-international.com//'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
