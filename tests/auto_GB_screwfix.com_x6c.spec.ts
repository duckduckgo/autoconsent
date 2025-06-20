import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_screwfix.com_x6c', ['https://www.screwfix.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
