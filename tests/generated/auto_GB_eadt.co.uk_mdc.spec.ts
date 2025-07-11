import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_eadt.co.uk_mdc', ['https://www.eadt.co.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
