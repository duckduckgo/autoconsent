import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_nyp.org_4dk', ['https://www.nyp.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
