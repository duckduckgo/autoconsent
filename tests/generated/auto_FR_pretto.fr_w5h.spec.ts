import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pretto.fr_w5h', ['https://www.pretto.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
