import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fiat.fr_3fh', ['https://www.fiat.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
