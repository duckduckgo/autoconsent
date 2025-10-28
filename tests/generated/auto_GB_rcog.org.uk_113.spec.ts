import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_rcog.org.uk_113', ['https://www.rcog.org.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
