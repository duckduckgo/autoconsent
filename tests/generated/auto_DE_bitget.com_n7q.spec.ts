import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bitget.com_n7q', ['https://www.bitget.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
