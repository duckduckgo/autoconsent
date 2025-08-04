import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_arket.com_rsb', ['https://www.arket.com/en-no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
