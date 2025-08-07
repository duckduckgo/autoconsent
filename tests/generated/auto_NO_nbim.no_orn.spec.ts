import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_nbim.no_orn', ['https://www.nbim.no/no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
