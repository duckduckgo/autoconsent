import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cookpad.com_3cz', ['https://cookpad.com/fr'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
