import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_drivalia.co.uk_oqw', ['https://drivalia.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
