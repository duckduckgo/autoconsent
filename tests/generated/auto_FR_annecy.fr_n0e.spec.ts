import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_annecy.fr_n0e', ['https://www.annecy.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
