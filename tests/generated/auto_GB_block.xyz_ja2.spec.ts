import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_block.xyz_ja2', ['https://block.xyz/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
