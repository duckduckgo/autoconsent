import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_airbnb.fr_aqz', ['https://www.airbnb.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
