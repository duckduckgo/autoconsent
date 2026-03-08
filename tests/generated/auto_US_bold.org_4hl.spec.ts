import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_bold.org_4hl', ['https://bold.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
