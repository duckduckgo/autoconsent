import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_outfox.energy_j0p', ['https://outfox.energy/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
