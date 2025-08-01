import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fortuneo.fr_8v2', ['https://www.fortuneo.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
