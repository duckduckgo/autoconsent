import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_belco.org_x5b', ['https://belco.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
