import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_fiec.org.uk_9ve', ['https://fiec.org.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
