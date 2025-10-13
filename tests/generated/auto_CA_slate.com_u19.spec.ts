import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_slate.com_u19', ['https://slate.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
