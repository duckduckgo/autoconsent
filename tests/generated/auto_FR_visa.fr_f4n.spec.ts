import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_visa.fr_f4n', ['https://www.visa.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
