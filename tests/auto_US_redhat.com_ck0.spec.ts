import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_US_redhat.com_ck0', ['https://www.redhat.com/en'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
