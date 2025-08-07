import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_zeemo.ai_7ar', ['https://zeemo.ai/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
