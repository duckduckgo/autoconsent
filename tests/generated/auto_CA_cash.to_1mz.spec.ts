import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_cash.to_1mz', ['https://cash.to/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
