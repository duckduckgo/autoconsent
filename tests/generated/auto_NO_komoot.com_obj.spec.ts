import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_komoot.com_obj', ['https://www.komoot.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
