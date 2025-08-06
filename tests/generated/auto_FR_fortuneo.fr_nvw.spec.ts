import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fortuneo.fr_nvw', ['https://www.fortuneo.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
