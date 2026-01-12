import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_wpcu.coop_6m1', ['https://www.wpcu.coop/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
