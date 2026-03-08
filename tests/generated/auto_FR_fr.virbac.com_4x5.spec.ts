import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.virbac.com_4x5', ['https://fr.virbac.com/fr.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
