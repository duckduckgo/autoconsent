import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_dsa.no_w2b', ['https://www.dsa.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
