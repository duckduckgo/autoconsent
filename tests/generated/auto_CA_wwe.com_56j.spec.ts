import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_wwe.com_56j', ['https://www.wwe.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
