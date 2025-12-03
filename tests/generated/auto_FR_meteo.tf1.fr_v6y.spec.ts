import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_meteo.tf1.fr_v6y', ['https://meteo.tf1.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
