import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_eloboost24.eu_i55', ['https://eloboost24.eu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
