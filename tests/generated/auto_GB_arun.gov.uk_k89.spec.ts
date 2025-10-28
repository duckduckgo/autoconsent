import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_arun.gov.uk_k89', ['https://www.arun.gov.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
