import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_fikfap.com_aq8', ['https://fikfap.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
