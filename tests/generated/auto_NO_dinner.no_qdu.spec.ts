import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_dinner.no_qdu', ['https://www.dinner.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
