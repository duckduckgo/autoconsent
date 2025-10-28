import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_3m.com_tcp', ['https://www.3m.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
