import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_agirpourlatransition.ademe.fr_s15', ['https://agirpourlatransition.ademe.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
