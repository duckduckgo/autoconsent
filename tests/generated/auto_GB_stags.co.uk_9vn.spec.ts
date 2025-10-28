import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_stags.co.uk_9vn', ['https://www.stags.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
