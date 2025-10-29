import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_roanyer.com_hh9', ['https://www.roanyer.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
