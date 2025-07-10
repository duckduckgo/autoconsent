import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_eif.co.uk_u4a', ['https://www.eif.co.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
