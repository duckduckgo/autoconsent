import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_outfox.energy_s5m', ['https://outfox.energy/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
