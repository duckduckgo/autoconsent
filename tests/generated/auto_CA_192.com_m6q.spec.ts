import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_192.com_m6q', ['https://www.192.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
