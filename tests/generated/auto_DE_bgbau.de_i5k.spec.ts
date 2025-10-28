import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bgbau.de_i5k', ['https://www.bgbau.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
