import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_zeemo.ai_kfo', ['https://zeemo.ai/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
