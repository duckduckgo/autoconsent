import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lalilo.com_6t5', ['https://lalilo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
