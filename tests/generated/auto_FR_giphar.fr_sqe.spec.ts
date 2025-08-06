import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_giphar.fr_sqe', ['https://www.giphar.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
