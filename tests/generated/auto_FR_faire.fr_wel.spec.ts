import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_faire.fr_wel', ['https://www.faire.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
