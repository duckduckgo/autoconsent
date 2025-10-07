import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_airplus.com_f46', ['https://airplus.com/en-de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
