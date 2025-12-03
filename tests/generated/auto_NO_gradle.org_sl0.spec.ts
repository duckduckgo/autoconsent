import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_gradle.org_sl0', ['https://gradle.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
