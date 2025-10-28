import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_claude.ai_l83', ['https://claude.ai/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
