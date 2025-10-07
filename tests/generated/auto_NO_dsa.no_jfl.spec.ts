import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_dsa.no_jfl', ['https://www.dsa.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
