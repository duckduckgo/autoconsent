import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_one.network_2qo', ['https://one.network/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
