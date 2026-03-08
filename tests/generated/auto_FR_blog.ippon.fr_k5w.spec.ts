import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_blog.ippon.fr_k5w', ['https://blog.ippon.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
