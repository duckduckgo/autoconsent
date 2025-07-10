import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_npg.org.uk_cny', ['https://www.npg.org.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
