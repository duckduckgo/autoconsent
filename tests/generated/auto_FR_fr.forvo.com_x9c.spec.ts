import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.forvo.com_x9c', ['https://fr.forvo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
