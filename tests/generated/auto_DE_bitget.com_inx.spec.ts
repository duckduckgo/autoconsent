import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bitget.com_inx', ['https://www.bitget.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
