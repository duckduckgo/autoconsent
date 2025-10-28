import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ofgem.gov.uk_6ov', ['https://www.ofgem.gov.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
