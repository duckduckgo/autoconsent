import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_stoke.gov.uk_fiz', ['https://www.stoke.gov.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
