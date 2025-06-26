import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_screwfix.com_hyb', ['https://www.screwfix.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
