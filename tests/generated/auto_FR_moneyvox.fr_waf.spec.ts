import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_moneyvox.fr_waf', ['https://www.moneyvox.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
