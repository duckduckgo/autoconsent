import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_overwolf.com_80e', ['https://www.overwolf.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
