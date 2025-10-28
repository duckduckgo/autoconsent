import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_rsgb.org_hja', ['https://rsgb.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
