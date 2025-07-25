import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ionos.co.uk_c0a', ['https://www.ionos.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
