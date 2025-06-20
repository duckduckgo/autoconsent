import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_strava.com_0', ['https://www.strava.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
