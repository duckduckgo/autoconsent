import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_sanef.com_170', ['https://www.sanef.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
