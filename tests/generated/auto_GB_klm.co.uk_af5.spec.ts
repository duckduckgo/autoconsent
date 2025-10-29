import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_klm.co.uk_af5', ['https://www.klm.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
