import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_cold.world_vij', ['https://cold.world/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
