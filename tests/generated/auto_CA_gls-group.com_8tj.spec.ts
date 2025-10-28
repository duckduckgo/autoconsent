import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_gls-group.com_8tj', ['https://gls-group.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
