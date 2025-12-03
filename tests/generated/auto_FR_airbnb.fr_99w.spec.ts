import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_airbnb.fr_99w', ['https://www.airbnb.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
