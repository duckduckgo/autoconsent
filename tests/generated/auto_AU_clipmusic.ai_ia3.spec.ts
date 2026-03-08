import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_clipmusic.ai_ia3', ['https://clipmusic.ai/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
