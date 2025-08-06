import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_vroomly.com_85c', ['https://www.vroomly.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
