import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bobvoyeur.com_qm5', ['https://www.bobvoyeur.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
