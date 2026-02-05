import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_noveocare.com_w5j', ['https://www.noveocare.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
