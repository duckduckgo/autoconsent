import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_iqair.com_7u5', ['https://www.iqair.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
