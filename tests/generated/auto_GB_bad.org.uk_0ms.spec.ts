import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bad.org.uk_0ms', ['https://www.bad.org.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
