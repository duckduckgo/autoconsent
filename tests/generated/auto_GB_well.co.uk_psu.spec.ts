import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_well.co.uk_psu', ['https://well.co.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
