import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.voghion.com_cyi', ['https://fr.voghion.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
