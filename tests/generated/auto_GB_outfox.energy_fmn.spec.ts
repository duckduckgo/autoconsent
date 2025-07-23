import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_outfox.energy_fmn', ['https://outfox.energy/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
