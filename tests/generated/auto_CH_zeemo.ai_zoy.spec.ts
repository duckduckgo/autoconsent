import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_zeemo.ai_zoy', ['https://zeemo.ai/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
