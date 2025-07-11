import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_bitget.com_5o1', ['https://www.bitget.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
