import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_bcmedequip.com_ufn', ['https://bcmedequip.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
