import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dutscher.com_mrr', ['https://www.dutscher.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
