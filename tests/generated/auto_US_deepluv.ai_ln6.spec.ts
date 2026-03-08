import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_deepluv.ai_ln6', ['https://deepluv.ai/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
