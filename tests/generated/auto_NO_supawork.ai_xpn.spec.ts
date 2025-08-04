import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_supawork.ai_xpn', ['https://supawork.ai/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
