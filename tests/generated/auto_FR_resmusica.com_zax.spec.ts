import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_resmusica.com_zax', ['https://www.resmusica.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
