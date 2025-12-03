import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_patchs.ai_o5s', ['https://hub.patchs.ai/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
