import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_reso-m.fr_s1s', ['https://www.reso-m.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
