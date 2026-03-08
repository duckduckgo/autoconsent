import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_ezel.ai_rly', ['https://ezel.ai/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
