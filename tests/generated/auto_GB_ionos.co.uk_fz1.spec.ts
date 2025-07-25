import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ionos.co.uk_fz1', ['https://www.ionos.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
