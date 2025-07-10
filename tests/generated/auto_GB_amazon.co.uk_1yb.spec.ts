import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_amazon.co.uk_1yb', ['https://www.amazon.co.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
