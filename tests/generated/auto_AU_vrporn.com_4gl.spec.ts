import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_vrporn.com_4gl', ['https://vrporn.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
