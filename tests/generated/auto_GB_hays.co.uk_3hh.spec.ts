import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_hays.co.uk_3hh', ['https://www.hays.co.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
