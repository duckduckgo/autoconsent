import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_anercea.com_kjd', ['https://anercea.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
