import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_metopera.org_oj0', ['https://www.metopera.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
