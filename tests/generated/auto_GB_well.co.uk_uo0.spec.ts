import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_well.co.uk_uo0', ['https://well.co.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
