import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_biona.co.uk_8w6', ['https://biona.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
