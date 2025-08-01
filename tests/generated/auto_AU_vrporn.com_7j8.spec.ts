import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_vrporn.com_7j8', ['https://vrporn.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
