import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cookpad.com_2t9', ['https://cookpad.com/fr'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
