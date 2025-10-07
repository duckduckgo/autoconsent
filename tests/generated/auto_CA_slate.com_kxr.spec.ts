import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_slate.com_kxr', ['https://slate.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
