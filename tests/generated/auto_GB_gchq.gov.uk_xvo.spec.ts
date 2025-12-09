import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_gchq.gov.uk_xvo', ['https://www.gchq.gov.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
