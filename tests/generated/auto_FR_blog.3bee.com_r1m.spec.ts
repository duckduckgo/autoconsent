import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_blog.3bee.com_r1m', ['https://blog.3bee.com/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
