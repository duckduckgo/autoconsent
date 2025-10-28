import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_nestenn.com_2zg', ['https://nestenn.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
