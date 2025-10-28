import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_rbwm.gov.uk_94z', ['https://www.rbwm.gov.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
