import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_alucare.fr_adp', ['https://www.alucare.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
