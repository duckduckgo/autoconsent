import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bitstudio.ai_fsw', ['https://bitstudio.ai/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
