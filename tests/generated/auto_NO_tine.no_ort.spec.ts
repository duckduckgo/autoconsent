import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_tine.no_ort', ['https://www.tine.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
