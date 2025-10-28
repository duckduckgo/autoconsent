import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_mi5.gov.uk_jbw', ['https://www.mi5.gov.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
