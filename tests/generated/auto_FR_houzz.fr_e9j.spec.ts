import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_houzz.fr_e9j', ['https://www.houzz.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
