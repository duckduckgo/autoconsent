import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_hetzner.com_ihy', ['https://www.hetzner.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
