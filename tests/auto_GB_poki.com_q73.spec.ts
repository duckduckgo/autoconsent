import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_poki.com_q73', ['https://poki.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
