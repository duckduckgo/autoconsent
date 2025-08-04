import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_fca.org.uk_9p9', ['https://www.fca.org.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
