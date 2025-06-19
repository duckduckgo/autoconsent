import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_rcgp.org.uk_4lc', ['https://www.rcgp.org.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
