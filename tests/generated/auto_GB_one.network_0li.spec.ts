import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_one.network_0li', ['https://one.network/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
