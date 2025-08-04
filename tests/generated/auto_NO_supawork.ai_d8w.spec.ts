import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_supawork.ai_d8w', ['https://supawork.ai/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
