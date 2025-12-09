import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_sugarlab.ai_dtr', ['https://www.sugarlab.ai/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
