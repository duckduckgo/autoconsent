import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cartegrise.com_75d', ['https://www.cartegrise.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
