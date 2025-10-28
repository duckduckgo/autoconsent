import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_nyp.org_q4o', ['https://www.nyp.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
