import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_veeam.com_8ff', ['https://www.veeam.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
