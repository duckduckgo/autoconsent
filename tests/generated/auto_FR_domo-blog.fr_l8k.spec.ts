import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_domo-blog.fr_l8k', ['https://www.domo-blog.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
