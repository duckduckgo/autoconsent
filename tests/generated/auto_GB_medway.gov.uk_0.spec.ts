import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_medway.gov.uk_0', ['https://www.medway.gov.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
