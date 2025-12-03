import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ulocation.com_mpx', ['https://www.ulocation.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
