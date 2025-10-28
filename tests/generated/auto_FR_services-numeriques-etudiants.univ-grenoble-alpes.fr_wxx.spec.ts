import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_FR_services-numeriques-etudiants.univ-grenoble-alpes.fr_wxx',
    ['https://services-numeriques-etudiants.univ-grenoble-alpes.fr/'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] },
);
