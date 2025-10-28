import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_justgeek.fr_dvx', ['https://www.justgeek.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
