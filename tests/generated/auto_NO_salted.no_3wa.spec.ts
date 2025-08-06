import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_salted.no_3wa', ['https://www.salted.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
