import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_finntrail.com_ac4', ['https://finntrail.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
