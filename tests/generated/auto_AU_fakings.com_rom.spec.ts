import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_fakings.com_rom', ['https://fakings.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
