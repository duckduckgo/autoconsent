import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_afpa.fr_naq', ['https://www.afpa.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
