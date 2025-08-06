import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_meteo.tf1.fr_4vd', ['https://meteo.tf1.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
