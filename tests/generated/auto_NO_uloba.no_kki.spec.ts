import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_uloba.no_kki', ['https://www.uloba.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
