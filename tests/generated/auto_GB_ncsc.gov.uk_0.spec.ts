import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ncsc.gov.uk_0', ['https://www.ncsc.gov.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
