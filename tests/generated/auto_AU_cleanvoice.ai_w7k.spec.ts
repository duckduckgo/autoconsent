import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_cleanvoice.ai_w7k', ['https://cleanvoice.ai/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
