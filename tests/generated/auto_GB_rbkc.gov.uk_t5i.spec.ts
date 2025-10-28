import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_rbkc.gov.uk_t5i', ['https://www.rbkc.gov.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
