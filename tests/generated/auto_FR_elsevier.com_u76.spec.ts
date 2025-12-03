import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_elsevier.com_u76', ['https://www.elsevier.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
