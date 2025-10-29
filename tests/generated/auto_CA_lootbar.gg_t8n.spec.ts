import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_lootbar.gg_t8n', ['https://lootbar.gg/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
