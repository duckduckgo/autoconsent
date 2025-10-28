import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_citb.co.uk_mic', ['https://www.citb.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
