import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_zeemo.ai_nw3', ['https://zeemo.ai/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
