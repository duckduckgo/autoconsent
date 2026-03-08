import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_dividend.watch_6a6', ['https://dividend.watch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
