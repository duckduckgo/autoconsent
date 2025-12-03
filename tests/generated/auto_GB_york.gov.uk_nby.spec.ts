import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_york.gov.uk_nby', ['https://www.york.gov.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
