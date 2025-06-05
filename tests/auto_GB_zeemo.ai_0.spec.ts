import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_zeemo.ai_0', ['https://zeemo.ai/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
