import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_jns.org_537', ['https://www.jns.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
