import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_moaa.org_q3n', ['https://www.moaa.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
