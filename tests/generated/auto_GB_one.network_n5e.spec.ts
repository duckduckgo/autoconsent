import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_one.network_n5e', ['https://one.network/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
