import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_size.co.uk_5o5', ['https://www.size.co.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
