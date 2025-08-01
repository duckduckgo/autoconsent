import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_geekom.fr_igw', ['https://www.geekom.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
