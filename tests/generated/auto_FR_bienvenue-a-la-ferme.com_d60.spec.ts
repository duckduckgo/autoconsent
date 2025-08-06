import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bienvenue-a-la-ferme.com_d60', ['https://www.bienvenue-a-la-ferme.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
