import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bdbase.fr_5x3', ['https://www.bdbase.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
