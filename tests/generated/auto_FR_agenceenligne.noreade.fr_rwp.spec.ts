import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_agenceenligne.noreade.fr_rwp', ['https://agenceenligne.noreade.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
