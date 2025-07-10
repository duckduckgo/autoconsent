import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_tfl.gov.uk_cf9', ['https://tfl.gov.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
