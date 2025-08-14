import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_diplomeo.com_lm5', ['https://diplomeo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
