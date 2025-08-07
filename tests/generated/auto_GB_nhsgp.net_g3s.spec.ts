import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_nhsgp.net_g3s', ['https://www.nhsgp.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
