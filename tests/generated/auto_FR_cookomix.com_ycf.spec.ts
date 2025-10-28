import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cookomix.com_ycf', ['https://www.cookomix.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
