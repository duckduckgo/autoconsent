import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_supawork.ai_r7i', ['https://supawork.ai/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
