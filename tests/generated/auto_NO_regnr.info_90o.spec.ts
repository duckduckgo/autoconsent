import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_regnr.info_90o', ['https://regnr.info/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
