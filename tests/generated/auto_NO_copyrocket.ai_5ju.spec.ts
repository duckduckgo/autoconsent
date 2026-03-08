import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_copyrocket.ai_5ju', ['https://copyrocket.ai/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
