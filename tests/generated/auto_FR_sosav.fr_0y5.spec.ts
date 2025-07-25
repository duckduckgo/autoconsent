import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_sosav.fr_0y5', ['https://www.sosav.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
