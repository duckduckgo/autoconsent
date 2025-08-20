import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_salted.no_n7p', ['https://www.salted.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
