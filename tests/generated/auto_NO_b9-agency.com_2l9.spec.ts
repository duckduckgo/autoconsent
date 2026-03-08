import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_b9-agency.com_2l9', ['https://b9-agency.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
