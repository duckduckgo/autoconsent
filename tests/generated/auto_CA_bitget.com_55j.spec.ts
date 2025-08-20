import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_bitget.com_55j', ['https://www.bitget.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
