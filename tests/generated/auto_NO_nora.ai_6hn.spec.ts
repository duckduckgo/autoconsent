import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_nora.ai_6hn', ['https://www.nora.ai/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
