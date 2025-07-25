import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_strava.com_cjm', ['https://www.strava.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
