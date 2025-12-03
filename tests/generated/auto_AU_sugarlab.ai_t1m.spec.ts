import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_sugarlab.ai_t1m', ['https://www.sugarlab.ai/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
