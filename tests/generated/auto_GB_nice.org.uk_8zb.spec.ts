import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_nice.org.uk_8zb', ['https://www.nice.org.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
