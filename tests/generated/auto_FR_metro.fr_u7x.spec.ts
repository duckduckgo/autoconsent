import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_metro.fr_u7x', ['https://www.metro.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
