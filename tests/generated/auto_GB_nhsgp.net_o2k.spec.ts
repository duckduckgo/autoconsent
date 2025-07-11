import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_nhsgp.net_o2k', ['https://www.nhsgp.net/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
