import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_editions-harmattan.fr_v99', ['https://www.editions-harmattan.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
