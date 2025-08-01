import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_kent.gov.uk_0', ['https://www.kent.gov.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
