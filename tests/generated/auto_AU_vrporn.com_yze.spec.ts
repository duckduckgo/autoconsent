import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_vrporn.com_yze', ['https://vrporn.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
