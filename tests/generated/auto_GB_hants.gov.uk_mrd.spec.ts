import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_hants.gov.uk_mrd', ['https://www.hants.gov.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
