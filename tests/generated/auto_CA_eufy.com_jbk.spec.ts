import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_eufy.com_jbk', ['https://www.eufy.com/ca'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
