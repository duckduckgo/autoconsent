import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_vroomly.com_854', ['https://www.vroomly.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
