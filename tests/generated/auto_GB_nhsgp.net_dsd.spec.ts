import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_nhsgp.net_dsd', ['https://www.nhsgp.net/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
