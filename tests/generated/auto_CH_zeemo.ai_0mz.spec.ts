import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_zeemo.ai_0mz', ['https://zeemo.ai/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
