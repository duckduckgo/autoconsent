import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_smile.co.uk_5lh', ['https://www.smile.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
