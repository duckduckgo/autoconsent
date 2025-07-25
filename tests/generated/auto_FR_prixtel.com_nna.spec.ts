import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_prixtel.com_nna', ['https://www.prixtel.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
