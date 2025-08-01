import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_nafcamp.no_bv3', ['https://www.nafcamp.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
