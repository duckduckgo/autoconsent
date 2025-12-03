import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_zeemo.ai_3x8', ['https://zeemo.ai/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
