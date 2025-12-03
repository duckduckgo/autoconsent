import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_sugarlab.ai_445', ['https://www.sugarlab.ai/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
