import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_chorley.gov.uk_yv7', ['https://chorley.gov.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
