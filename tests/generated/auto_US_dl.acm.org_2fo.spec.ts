import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_dl.acm.org_2fo', ['https://dl.acm.org/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
