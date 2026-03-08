import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_en.cpost.org_nhc', ['https://en.cpost.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
