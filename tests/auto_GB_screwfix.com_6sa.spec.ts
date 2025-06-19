import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_screwfix.com_6sa', ['https://www.screwfix.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
