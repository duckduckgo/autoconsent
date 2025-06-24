import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_klm.co.uk_0', ['https://www.klm.co.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
