import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_elsevier.com_tp2', ['https://www.elsevier.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
