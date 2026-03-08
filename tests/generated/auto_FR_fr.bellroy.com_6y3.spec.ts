import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.bellroy.com_6y3', ['https://fr.bellroy.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
