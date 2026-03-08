import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_breeze.social_8cd', ['https://breeze.social/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
