import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_york.gov.uk_ot2', ['https://www.york.gov.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
