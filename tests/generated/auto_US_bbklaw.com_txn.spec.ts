import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_bbklaw.com_txn', ['https://bbklaw.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
