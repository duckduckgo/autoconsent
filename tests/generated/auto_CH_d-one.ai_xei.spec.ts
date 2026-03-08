import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_d-one.ai_xei', ['https://d-one.ai/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
