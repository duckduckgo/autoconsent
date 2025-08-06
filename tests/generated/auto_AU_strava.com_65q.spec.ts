import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_strava.com_65q', ['https://www.strava.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
