import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_adotecgear.com_0qz', ['https://adotecgear.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
