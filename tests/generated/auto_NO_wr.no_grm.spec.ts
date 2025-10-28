import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_wr.no_grm', ['https://www.wr.no/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
