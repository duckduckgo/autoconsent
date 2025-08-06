import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_gradle.org_8rt', ['https://gradle.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
