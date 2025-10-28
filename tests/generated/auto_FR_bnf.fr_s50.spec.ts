import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bnf.fr_s50', ['https://www.bnf.fr/fr'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
