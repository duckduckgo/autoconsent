import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_nbim.no_2o7', ['https://www.nbim.no/no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
