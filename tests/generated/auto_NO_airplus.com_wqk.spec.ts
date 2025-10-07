import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_airplus.com_wqk', ['https://airplus.com/en-de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
