import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_momondo.fr_ibz', ['https://www.momondo.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
