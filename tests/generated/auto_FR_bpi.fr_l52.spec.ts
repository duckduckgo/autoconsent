import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bpi.fr_l52', ['https://www.bpi.fr/en/home/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
