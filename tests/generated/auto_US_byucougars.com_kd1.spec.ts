import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_byucougars.com_kd1', ['https://byucougars.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
