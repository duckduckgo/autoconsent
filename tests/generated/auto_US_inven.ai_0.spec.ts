import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_inven.ai_0', ['https://www.inven.ai/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
