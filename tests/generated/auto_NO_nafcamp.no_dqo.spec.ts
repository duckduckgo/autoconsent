import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_nafcamp.no_dqo', ['https://www.nafcamp.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
