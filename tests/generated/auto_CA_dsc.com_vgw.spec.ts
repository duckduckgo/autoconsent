import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_dsc.com_vgw', ['https://www.dsc.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
