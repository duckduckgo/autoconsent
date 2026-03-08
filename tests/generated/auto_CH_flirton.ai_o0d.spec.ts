import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_flirton.ai_o0d', ['https://flirton.ai/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
