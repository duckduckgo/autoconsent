import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_nafcamp.no_r9b', ['https://www.nafcamp.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
