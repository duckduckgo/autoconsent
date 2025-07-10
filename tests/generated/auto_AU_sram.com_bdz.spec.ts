import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_sram.com_bdz', ['https://www.sram.com/en/sram'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
