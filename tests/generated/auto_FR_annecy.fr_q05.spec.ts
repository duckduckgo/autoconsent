import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_annecy.fr_q05', ['https://www.annecy.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
