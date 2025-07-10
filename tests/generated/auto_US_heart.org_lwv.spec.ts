import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_heart.org_lwv', ['https://www.heart.org/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
