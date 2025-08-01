import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_outfox.energy_oo4', ['https://outfox.energy/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
