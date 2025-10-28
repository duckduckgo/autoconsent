import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_raspberryme.com_kkp', ['https://www.raspberryme.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
