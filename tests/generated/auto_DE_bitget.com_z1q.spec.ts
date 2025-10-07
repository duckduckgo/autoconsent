import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bitget.com_z1q', ['https://www.bitget.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
