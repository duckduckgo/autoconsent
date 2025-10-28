import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_hsbc.co.uk_7ig', ['https://www.hsbc.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
