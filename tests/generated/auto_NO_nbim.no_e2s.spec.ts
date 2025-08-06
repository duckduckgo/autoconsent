import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_nbim.no_e2s', ['https://www.nbim.no/no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
