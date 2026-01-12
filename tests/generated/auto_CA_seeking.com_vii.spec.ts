import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_seeking.com_vii', ['https://www.seeking.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
