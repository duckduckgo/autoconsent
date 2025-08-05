import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_supawork.ai_wp1', ['https://supawork.ai/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
