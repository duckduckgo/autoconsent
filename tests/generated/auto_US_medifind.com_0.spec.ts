import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_medifind.com_0', ['https://www.medifind.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
