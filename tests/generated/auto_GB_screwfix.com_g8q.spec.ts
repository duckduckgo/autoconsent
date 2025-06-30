import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_screwfix.com_g8q', ['https://www.screwfix.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
