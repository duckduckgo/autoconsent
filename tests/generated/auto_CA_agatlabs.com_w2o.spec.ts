import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_agatlabs.com_w2o', ['https://agatlabs.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
