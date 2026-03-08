import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_callister.it_it7', ['https://callister.it/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
