import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_eu-jamrai.eu_fts', ['https://eu-jamrai.eu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
