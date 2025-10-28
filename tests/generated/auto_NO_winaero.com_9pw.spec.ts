import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_winaero.com_9pw', ['https://winaero.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
