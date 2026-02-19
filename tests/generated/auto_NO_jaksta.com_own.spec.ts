import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_jaksta.com_own', ['https://www.jaksta.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
