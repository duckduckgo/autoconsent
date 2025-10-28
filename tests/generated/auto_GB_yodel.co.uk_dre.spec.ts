import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_yodel.co.uk_dre', ['https://www.yodel.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
