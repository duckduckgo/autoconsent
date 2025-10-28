import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_mmu.ac.uk_5xt', ['https://www.mmu.ac.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
