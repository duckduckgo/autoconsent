import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_sportstats.one_hag', ['https://sportstats.one/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
