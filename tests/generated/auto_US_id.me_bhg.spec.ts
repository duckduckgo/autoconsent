import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_id.me_bhg', ['https://www.id.me/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
