import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_factory.ai_pv4', ['https://factory.ai/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
