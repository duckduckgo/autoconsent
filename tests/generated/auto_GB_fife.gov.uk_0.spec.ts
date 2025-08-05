import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_fife.gov.uk_0', ['https://www.fife.gov.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
