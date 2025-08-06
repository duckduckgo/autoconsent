import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bdbase.fr_bat', ['https://www.bdbase.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
