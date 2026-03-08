import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_capify.ai_3nt', ['https://capify.ai/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
