import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_diplomeo.com_paf', ['https://diplomeo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
