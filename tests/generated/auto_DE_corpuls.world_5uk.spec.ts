import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_corpuls.world_5uk', ['https://corpuls.world/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
