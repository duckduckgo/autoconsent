import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_sante.fr_8ws', ['https://www.sante.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
