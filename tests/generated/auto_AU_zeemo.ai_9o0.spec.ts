import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_zeemo.ai_9o0', ['https://zeemo.ai/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
