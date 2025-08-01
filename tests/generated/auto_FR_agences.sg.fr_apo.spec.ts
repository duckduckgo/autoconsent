import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_agences.sg.fr_apo', ['https://agences.sg.fr/banque-assurance/particulier/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
