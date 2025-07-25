import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cybermalveillance.gouv.fr_cf7', ['https://www.cybermalveillance.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
