import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_slate.com_gfu', ['https://slate.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
