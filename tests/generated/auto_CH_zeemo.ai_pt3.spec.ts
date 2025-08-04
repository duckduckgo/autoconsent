import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_zeemo.ai_pt3', ['https://zeemo.ai/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
