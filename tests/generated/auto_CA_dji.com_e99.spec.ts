import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_dji.com_e99', ['https://www.dji.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
