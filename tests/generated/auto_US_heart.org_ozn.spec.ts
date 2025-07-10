import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_heart.org_ozn', ['https://www.heart.org/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
