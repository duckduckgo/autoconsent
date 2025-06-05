import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_sram.com_0', ['https://www.sram.com/en/sram'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
