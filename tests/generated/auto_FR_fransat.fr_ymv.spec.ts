import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fransat.fr_ymv', ['https://www.fransat.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
