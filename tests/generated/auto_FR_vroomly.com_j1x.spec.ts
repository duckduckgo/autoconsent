import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_vroomly.com_j1x', ['https://www.vroomly.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
