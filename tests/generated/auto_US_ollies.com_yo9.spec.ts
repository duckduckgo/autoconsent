import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_ollies.com_yo9', ['https://www.ollies.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
