import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_sugarlab.ai_cbf', ['https://www.sugarlab.ai/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
