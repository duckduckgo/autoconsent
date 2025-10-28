import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_well.co.uk_vwy', ['https://well.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
