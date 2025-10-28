import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_local.infobel.fr_c5i', ['https://local.infobel.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
