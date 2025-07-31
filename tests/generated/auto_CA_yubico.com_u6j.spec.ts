import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_yubico.com_u6j', ['https://www.yubico.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
