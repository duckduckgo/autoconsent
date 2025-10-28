import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.tommy.com_yi3', ['https://fr.tommy.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
