import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_outfox.energy_g6i', ['https://outfox.energy/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
