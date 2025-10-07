import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bitget.com_px0', ['https://www.bitget.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
